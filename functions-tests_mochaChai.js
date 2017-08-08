import { expect } from 'chai'
import month from './functions.js'
import date from './functions.js'
import christmas from './functions.js'
import reverseSentence from './functions.js'
import nameProps from './functions.js'
import filterBetween from './functions.js'

describe('month', () => {

  it('should be a function', function() {
    expect(month).to.be.a('function')
  })

  it('should return month in a string', function() {
    expect(month(date)).to.equal('June')
  })

  it('should return false when not given a proper date entry', function() {
    expect()
  })
})

describe('reverseSentence', () => {

  it('should be a function', function() {
    expect(reverseSentence).to.be.a('function')
  })

  it('should return word order in reverse', function() {
    expect(reverseSentence('This better work.')).to.equal('work. better This')
  })


})
