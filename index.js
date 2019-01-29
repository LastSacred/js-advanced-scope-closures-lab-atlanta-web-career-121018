function produceDrivingRange(blockRange) {
  return function (start, end) {
    trip = Math.abs(parseInt(start) - parseInt(end))
    if (trip <= blockRange) {
      return `within range by ${blockRange - trip}`
    } else {
      return `${trip - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function (fare) {
    return fare * percentage
  }
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}

const Driver = createDriver()
