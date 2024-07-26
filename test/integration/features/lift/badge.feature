Feature: Badge

  Scenario: define a renovate badge
    Given the project uses a dependabot config in the modern location
    When the scaffolder results are processed
    Then the dependabot badge details are defined
