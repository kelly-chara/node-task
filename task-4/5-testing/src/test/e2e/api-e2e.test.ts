import request from "supertest";
import { PUBLIC_HOLIDAYS_API_URL } from "../../config";

describe("Nager API", () => {
  describe("/CountryInfo/{countryCode}", () => {
    test("should return 200 and country description", async () => {
      const countryCode = "GB";
      const { status, body } = await request(PUBLIC_HOLIDAYS_API_URL).get(
        `/CountryInfo/${countryCode}`
      );

      expect(status).toEqual(200);
      expect(body).toEqual({
        commonName: expect.any(String),
        officialName: expect.any(String),
        countryCode: expect.any(String),
        region: expect.any(String),
        borders: [
          {
            commonName: expect.any(String),
            officialName: expect.any(String),
            countryCode: expect.any(String),
            region: expect.any(String),
            borders: null,
          },
        ],
      });
    });

    test("should return 404 if invalid countryCode", async () => {
        const countryCode = "GTA";
        const { status, body } = await request(PUBLIC_HOLIDAYS_API_URL).get(
          `/CountryInfo/${countryCode}`
        );
  
        expect(status).toEqual(404);
        expect(body).toStrictEqual({
            type: expect.any(String),
            title: expect.any(String),
            status: 404,
            traceId: expect.any(String),
          });
     
      });
  });

  describe("/AvailableCountries", () => {
    test("should return 200 and country description", async () => {
      const { status, body } = await request(PUBLIC_HOLIDAYS_API_URL).get(
        `/AvailableCountries`
      );

      expect(status).toEqual(200);

      if (Array.isArray(body)) {
        body.forEach((availableCountry) => {
          expect(availableCountry).toStrictEqual({
            countryCode: expect.any(String),
            name: expect.any(String),
          });
        });
      }
    });
  });

  describe("/PublicHolidays/{year}/{countryCode}", () => {
    test("should return 200 and array of holidays for especific country", async () => {
      const year = 2023;
      const countryCode = "CO";

      const { status, body } = await request(PUBLIC_HOLIDAYS_API_URL).get(
        `/PublicHolidays/${year}/${countryCode}`
      );

      expect(status).toEqual(200);

      if (Array.isArray(body)) {
        body.forEach((availableCountry) => {
          expect(availableCountry).toStrictEqual({
            countryCode: expect.any(String),
            name: expect.any(String),
            date: expect.any(String),
            localName: expect.any(String),
            fixed: expect.any(Boolean),
            global: expect.any(Boolean),
            counties: null,
            launchYear: null,
            types: [expect.any(String)],
          });
        });
      }
    });

    test("should return 404 on invalid countryCode", async () => {
        const year = 2023;
        const countryCode = "NAC";
  
        const { status, body } = await request(PUBLIC_HOLIDAYS_API_URL).get(
          `/PublicHolidays/${year}/${countryCode}`
        );
  
        expect(status).toEqual(404);
  
        
          
            expect(body).toStrictEqual({
              type: expect.any(String),
              title: expect.any(String),
              status: 404,
              traceId: expect.any(String),
            });
        
      });
  });
});
