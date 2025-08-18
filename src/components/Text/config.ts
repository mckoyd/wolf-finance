export const ALIGN_CLASSES = {
  start: "alignStart",
  center: "alignCenter",
  end: "alignEnd",
  justify: "alignJustify",
} as const;

export const TEXT_DEFAULTS = {
  as: "p",
  variant: "preset-4",
  align: "start",
} as const;

export const TEXT_STORY_CONTENT = {
  lipsumShort: "The quick brown fox jumps over the lazy dog.",
  lipsumLong:
    "The quick brown fox jumps over the lazy dog, then sprints across the field while the wind whistles and the sun glows — testing wrapping, punctuation, and long line rendering in our preset.",
  numericSample: "$12,345.67 • 98,765 points • -$420.15 refund pending",
  rtlArabic: "مرحبا بالعالم — اختبار العرض من اليمين إلى اليسار في نص الفقرة.",
};
