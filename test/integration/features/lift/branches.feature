Feature: Branches

  Scenario: enable verification of dependabot branches
    Given the project uses a dependabot config in the modern location
    When the scaffolder results are processed
    Then dependabot branches are suggested for verification
