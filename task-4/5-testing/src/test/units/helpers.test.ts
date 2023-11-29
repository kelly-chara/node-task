import { validateInput, shortenPublicHoliday } from "../../helpers"

const mockedHoliday = {
    "date": "2023-01-01",
    "localName": "New Year's Day",
    "name": "New Year's Day",
    "countryCode": "GB",
    "fixed": false,
    "global": false,
    "counties": [
      "GB-NIR"
    ],
    "launchYear": null,
    "types": [
      "Public"
    ]
  }

describe("unit tests on validateInput", () => {

    test("should trow an error on invalid country", () => {

       
        const year = new Date().getFullYear();
        const country = "col"

       expect(() => validateInput({year, country}))
       .toThrow(new Error(`Country provided is not supported, received: ${country}`))
       
    })

    test("should trow an error on invalid year", () => {
       
        const year = 1940;
        const country = "NL"

       expect(() => validateInput({year, country}))
       .toThrow(new Error(`Year provided not the current, received: ${year}`))
       
    })

    test("should return true on valid input", () => {

        const year = new Date().getFullYear();
        const country = "DE"
        
       expect(() => validateInput({year, country}))
       .toBeTruthy()
       
    })
})

describe("unit test on shortenPublicHoliday", () => {
    test('should return the shortened holidays', async () => { 

       
        const response = await shortenPublicHoliday(mockedHoliday)
        const validKeys =   [ 'name', 'localName', 'date' ]
        expect(Object.keys(response)).toEqual(validKeys)
     })
     
})