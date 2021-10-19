import {Client} from '../src/client';
import {Gui} from '../src/gui';
import {Shipment} from '../src/shipment';

describe('Client', () => {
  var getShipmentIdSpy;
  var gui = new Gui();
  var client = new Client(gui);

  beforeEach(function () {
      console.log = jasmine.createSpy("log");
      Shipment.getShipmentId = jasmine.createSpy().and.callFake(function() {
          return 123;
      });
  });

  it('triggers shipment', () => {
      const shipment = new Shipment({
          'fromAddress': 'Address 1',
          'fromZipCode': '12345',
          'toAddress': 'Address 2',
          'toZipCode': '54321',
          'weight': 10
      });

      gui.trigger('ship', shipment);

      expect(console.log).toHaveBeenCalledWith(
          'Shipment with the ID 123 will be picked up from Address 1 12345 ' +
          'and shipped to Address 2 54321\n' +
          'Cost: $3.90'
      );
  });

  it('triggers chicago sprint shipment', () => {
      const shipment = new Shipment({
          'fromAddress': 'Address 2',
          'fromZipCode': '54321',
          'toAddress': 'Address 1',
          'toZipCode': '12345',
          'weight': 10
      });

      gui.trigger('ship', shipment);

      expect(console.log).toHaveBeenCalledWith(
          'Shipment with the ID 123 will be picked up from Address 2 54321 ' +
          'and shipped to Address 1 12345\n' +
          'Cost: $4.20'
      );
  });

  it('triggers pacific parcel shipment', () => {
      const shipment = new Shipment({
          'fromAddress': 'Address 3',
          'fromZipCode': '98765',
          'toAddress': 'Address 1',
          'toZipCode': '12345',
          'weight': 10
      });

      gui.trigger('ship', shipment);

      expect(console.log).toHaveBeenCalledWith(
          'Shipment with the ID 123 will be picked up from Address 3 98765 ' +
          'and shipped to Address 1 12345\n' +
          'Cost: $5.10'
      );
  });
});
