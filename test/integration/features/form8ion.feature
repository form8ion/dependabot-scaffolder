Feature: dependabot-scaffolder as form8ion plugin

  Scenario: plugin conventions
    Given the project repository is hosted on GitHub
    When the dependabot plugin is compared to form8ion plugin conventions
    Then the public interface is compatible with the plugin schema
    And the output produced by the scaffolder is detectable by the predicate
