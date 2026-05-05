#!/usr/bin/env node

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const DEFAULT_CSV = resolve(process.cwd(), "kpi-tracker.csv");

function parseCsvLine(line) {
  const cells = [];
  let value = "";
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const nextChar = line[index + 1];

    if (char === '"' && nextChar === '"' && inQuotes) {
      value += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      cells.push(value);
      value = "";
      continue;
    }

    value += char;
  }

  cells.push(value);
  return cells;
}

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((line) => line.length > 0);
  return lines.map(parseCsvLine);
}

function normalizeRows(rows) {
  if (rows.length === 0) {
    return rows;
  }

  const headerLength = rows[0].length;

  return rows.map((row, rowIndex) => {
    if (rowIndex === 0) {
      return row;
    }

    if (row.length === headerLength) {
      return row;
    }

    if (row.length < headerLength) {
      return [...row, ...Array(headerLength - row.length).fill("")];
    }

    return row.slice(0, headerLength);
  });
}

function formatCsvCell(value) {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replaceAll('"', '""')}"`;
  }
  return value;
}

function formatNumber(value) {
  return Number.isFinite(value) ? value.toFixed(1) : "";
}

function toNumber(value) {
  if (value === null || value === undefined) {
    return NaN;
  }

  if (typeof value === "string" && value.trim() === "") {
    return NaN;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : NaN;
}

function updateDerivedFields(rows) {
  const header = rows[0];
  const indexByName = Object.fromEntries(
    header.map((columnName, index) => [columnName, index]),
  );

  let previousMedianMerge = NaN;

  for (let rowIndex = 1; rowIndex < rows.length; rowIndex += 1) {
    const row = rows[rowIndex];
    const totalTasks = toNumber(row[indexByName.total_tasks]);
    const activeTasks = toNumber(row[indexByName.ai_active_tasks]);
    const aiPrCount = toNumber(row[indexByName.ai_pr_count]);
    const aiPrWithDefects = toNumber(row[indexByName.ai_prs_with_prod_defects]);
    const medianMergeHours = toNumber(
      row[indexByName.median_time_to_merge_hours_ai_prs],
    );
    const prodDeployments = toNumber(row[indexByName.prod_deployments_count]);
    const failedProdDeployments = toNumber(
      row[indexByName.failed_prod_deployments_count],
    );
    const sprintLengthDays = toNumber(row[indexByName.sprint_length_days]);

    if (Number.isFinite(totalTasks) && totalTasks > 0 && Number.isFinite(activeTasks)) {
      row[indexByName.adoption_ratio_active_pct] = formatNumber(
        (activeTasks / totalTasks) * 100,
      );
    } else {
      row[indexByName.adoption_ratio_active_pct] = "";
    }

    if (Number.isFinite(aiPrCount) && aiPrCount > 0 && Number.isFinite(aiPrWithDefects)) {
      row[indexByName.defect_escape_rate_pct] = formatNumber(
        (aiPrWithDefects / aiPrCount) * 100,
      );
    } else {
      row[indexByName.defect_escape_rate_pct] = "";
    }

    if (
      Number.isFinite(prodDeployments) &&
      prodDeployments > 0 &&
      Number.isFinite(failedProdDeployments)
    ) {
      row[indexByName.cfr_pct] = formatNumber(
        (failedProdDeployments / prodDeployments) * 100,
      );
    } else if (indexByName.cfr_pct !== undefined) {
      row[indexByName.cfr_pct] = "";
    }

    if (
      Number.isFinite(prodDeployments) &&
      Number.isFinite(sprintLengthDays) &&
      sprintLengthDays > 0
    ) {
      row[indexByName.deployment_frequency_per_week] = formatNumber(
        (prodDeployments / sprintLengthDays) * 7,
      );
    } else if (indexByName.deployment_frequency_per_week !== undefined) {
      row[indexByName.deployment_frequency_per_week] = "";
    }

    if (Number.isFinite(medianMergeHours) && Number.isFinite(previousMedianMerge)) {
      if (medianMergeHours < previousMedianMerge) {
        row[indexByName.time_to_merge_trend_vs_prev] = "down";
      } else if (medianMergeHours > previousMedianMerge) {
        row[indexByName.time_to_merge_trend_vs_prev] = "up";
      } else {
        row[indexByName.time_to_merge_trend_vs_prev] = "flat";
      }
    } else {
      row[indexByName.time_to_merge_trend_vs_prev] = "";
    }

    if (Number.isFinite(medianMergeHours)) {
      previousMedianMerge = medianMergeHours;
    }
  }
}

function toCsv(rows) {
  return `${rows
    .map((row) => row.map((cell) => formatCsvCell(String(cell ?? ""))).join(","))
    .join("\n")}\n`;
}

function main() {
  const csvPath = process.argv[2] ? resolve(process.argv[2]) : DEFAULT_CSV;
  const input = readFileSync(csvPath, "utf8");
  const rows = normalizeRows(parseCsv(input));

  if (rows.length < 2) {
    throw new Error("CSV must include header and at least one data row.");
  }

  updateDerivedFields(rows);
  writeFileSync(csvPath, toCsv(rows), "utf8");
  console.log(`Updated derived KPI fields in ${csvPath}`);
}

main();
