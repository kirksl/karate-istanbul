@tests=advanced
Feature: advanced tests

  Background:
    * url 'http://localhost:3000/v1'
    
  @test=advanced-circumference
  Scenario: advanced circumference
    Given path '/circumference/10'
    When method get
    Then status 200
    And assert response.result == 62.83185307179586