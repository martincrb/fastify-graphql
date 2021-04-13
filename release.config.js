module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalCommits",
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
        },
        presetConfig: {
          types: [
            {
              type: "feat",
              section: "Features",
            },
            {
              type: "fix",
              section: "Bug Fixes",
            },
            {
              type: "chore",
              section: "Internal",
              hidden: false,
            },
            {
              type: "refactor",
              section: "Internal",
              hidden: false,
            },
            {
              type: "perf",
              section: "Internal",
              hidden: false,
            },
          ],
        },
      },
    ],
    "@semantic-release/changelog",
    [
      "@semantic-release/npm",
      {
        tarballDir: "release",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json", "package-lock.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
  preset: "angular",
};
