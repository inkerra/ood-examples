import {Shipment} from '../src/shipment';
import {buildFrom} from '../src/shipment';

describe('Shipment', () => {
  beforeEach(function () {
      Shipment.getShipmentId = jasmine.createSpy().and.callFake(function() {
          return 1;
      });
  });

  it('ship should return correct value', () => {
      const shipment = buildFrom({
          'fromAddress': 'Address 1',
          'fromZipCode': '12345',
          'toAddress': 'Address 2',
          'toZipCode': '54321',
          'weight': 10
      });

      expect(shipment.ship()).toEqual(
          'Shipment with the ID 1 will be picked up from Address 1 12345 ' +
          'and shipped to Address 2 54321\n' +
          'Cost: $3.90'
      );
  });
});
