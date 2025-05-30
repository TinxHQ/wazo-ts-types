import * as wazoTypes from '../index';

describe('wazo-types exports', () => {
    test('should export Wazo Platform API schemas', () => {
      expect(wazoTypes.Agentd).toBeDefined();
      expect(wazoTypes.Amid).toBeDefined();
      expect(wazoTypes.Auth).toBeDefined();
      expect(wazoTypes.Calld).toBeDefined();
      expect(wazoTypes.CallLogd).toBeDefined();
      expect(wazoTypes.Chatd).toBeDefined();
      expect(wazoTypes.Confd).toBeDefined();
      expect(wazoTypes.Dird).toBeDefined();
      expect(wazoTypes.Plugind).toBeDefined();
      expect(wazoTypes.Provd).toBeDefined();
      expect(wazoTypes.Setupd).toBeDefined();
      expect(wazoTypes.Webhookd).toBeDefined();
    });

    test('should export Portal API schemas', () => {
      expect(wazoTypes.ConfdPortal).toBeDefined();
      expect(wazoTypes.AuthPortal).toBeDefined();
      expect(wazoTypes.DeploydPortal).toBeDefined();
      expect(wazoTypes.AccessdPortal).toBeDefined();
    });
});
