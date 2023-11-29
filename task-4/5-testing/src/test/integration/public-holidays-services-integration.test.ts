import { getListOfPublicHolidays, checkIfTodayIsPublicHoliday, getNextPublicHolidays } from "../../services/public-holidays.service";

  // to avoid the test failing if the year is hardcoded and not updated
  const year = new Date().getFullYear();

  const country = "GB"

  describe('unit tests on public-holiday-service', () => { 

     
    test('The response should be an array of public holiday short', async () => { 
    
        const listResponse = await getListOfPublicHolidays(year, country)
       
        // Check if it's an array
        expect(Array.isArray(listResponse)).toBe(true);
       
        // check types of the items
        if (Array.isArray(listResponse)) {
            listResponse.forEach(publicHoliday => {
                expect(publicHoliday).toStrictEqual({
                    name: expect.any(String),
                    date:  expect.any(String),
                    localName:  expect.any(String),
                });
            });
        }
     })  


     test('should check if today is a boolean', async () => {

        const response = await checkIfTodayIsPublicHoliday(country)
    
        expect(response).toStrictEqual(expect.any(Boolean))
      })
     
     
      test("the next holiday should be an array of shortPublicHoliday", async () => {

        const response = await getNextPublicHolidays("DE");

        if (Array.isArray(response)) {
            response.forEach(nextHoliday => {
                expect(nextHoliday).toStrictEqual({
                    name: expect.any(String),
                    date:  expect.any(String),
                    localName:  expect.any(String),
                });
            });
        }
      } )
   })


    