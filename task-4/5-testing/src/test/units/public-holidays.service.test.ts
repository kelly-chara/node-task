import axios from "axios";
import { PUBLIC_HOLIDAYS_API_URL} from "../../config";
import { getListOfPublicHolidays, checkIfTodayIsPublicHoliday, getNextPublicHolidays } from "../../services/public-holidays.service";

const mockedHolidays = [{
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
  },
  {
    "date": "2023-01-02",
    "localName": "New Year's Day",
    "name": "New Year's Day",
    "countryCode": "GB",
    "fixed": false,
    "global": false,
    "counties": [
      "GB-ENG",
      "GB-WLS"
    ],
    "launchYear": null,
    "types": [
      "Public"
    ]
  },]

  // to avoid the test failing if the year is hardcoded and not updated
  const year = new Date().getFullYear();

  const country = "GB"

  describe('unit tests on public-holiday-service', () => { 

     
    test('should be called with the correct url', async () => { 
    
        const axiosSpy = jest.spyOn(axios, "get").mockImplementation(() => Promise.resolve({data: mockedHolidays}))
        const listResponse = await getListOfPublicHolidays(year, country)
        expect(listResponse.length).toEqual(mockedHolidays.length)
        expect(axiosSpy).toHaveBeenCalledWith(`${PUBLIC_HOLIDAYS_API_URL}/PublicHolidays/${year}/${country}`)
     })

    
     afterEach(() => {
        // clear all mocks to make sure that they won't be passed to any tests out of this file
        jest.clearAllMocks();
      });
   })


    describe('unit test on checkIfTodayIsPublicHoliday',  () => { 
        //Not a good test since the it depends on the days no really any of the functionality
        test('should check if today is local holiday', async () => {
            const axiosSpy = jest.spyOn(axios, "get")
            .mockImplementation(() => Promise.resolve({data: mockedHolidays}))

             await checkIfTodayIsPublicHoliday(country)
            
             expect(axiosSpy)
             .toHaveBeenCalledWith(`${PUBLIC_HOLIDAYS_API_URL}/IsTodayPublicHoliday/${country}`)

          })

          afterEach(() => {
            // clear all mocks to make sure that they won't be passed to any tests out of this file
            jest.clearAllMocks();
          });
     })


     describe("unit test on getNextPublicHolidays", () => {
        
        test("should return the next holiday", async () => {

          const country = "FR"
          const axiosSpy = jest.spyOn(axios, "get")
        .mockImplementation(() => Promise.resolve({data: mockedHolidays}))

          const response = await getNextPublicHolidays(country);

          expect(axiosSpy)
         .toHaveBeenCalledWith(`${PUBLIC_HOLIDAYS_API_URL}/NextPublicHolidays/${country}`)
       
        } )
        
        afterEach(() => {
            // clear all mocks to make sure that they won't be passed to any tests out of this file
            jest.clearAllMocks();
          });
     })