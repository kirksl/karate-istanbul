@tests=calculator
Feature: calculator tests

  Background:
    * url 'http://localhost:3000/v1'

  @test=calculator-sum
  Scenario: calculator sum
    Given path '/sum/1/2'
    When method get
    Then status 200
    And assert response.result == 3

  @test=calculator-subtract
  Scenario: calculator subtract
    Given path '/subtract/3/1'
    When method get
    Then status 200
    And assert response.result == 2

  @test=calculator-multiply
  Scenario: calculator multiply
    Given path '/multiply/3/3'
    When method get
    Then status 200
    And assert response.result == 9

  @test=calculator-divide
  Scenario: calculator divide
    Given path '/divide/6/2'
    When method get
    Then status 200
    And assert response.result == 3