export function resolveSoftDeletedRecord(records, values, identityFields) {
  const matches = records.filter(record => identityFields.some(field =>
    values[field] !== undefined &&
    values[field] !== null &&
    values[field] !== "" &&
    record[field] === values[field]
  ));

  if (!matches.length) return { kind: "new" };
  if (matches.length === 1 && matches[0].deletedAt) {
    return { kind: "restore", record: matches[0] };
  }
  return { kind: "conflict" };
}
