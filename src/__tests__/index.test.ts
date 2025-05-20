import * as wazoTypes from '../index';

describe('wazo-types exports', () => {
    test('should export Wazo Platform API schemas', () => {
        expect(wazoTypes.AgentdSchema).toBeDefined();
        expect(wazoTypes.AmidSchema).toBeDefined();
        expect(wazoTypes.AuthSchema).toBeDefined();
        expect(wazoTypes.CalldSchema).toBeDefined();
        expect(wazoTypes.CallLogdSchema).toBeDefined();
        expect(wazoTypes.ChatdSchema).toBeDefined();
        expect(wazoTypes.ConfdSchema).toBeDefined();
        expect(wazoTypes.DirdSchema).toBeDefined();
        expect(wazoTypes.PlugindSchema).toBeDefined();
        expect(wazoTypes.ProvdSchema).toBeDefined();
        expect(wazoTypes.SetupdSchema).toBeDefined();
        expect(wazoTypes.WebhookdSchema).toBeDefined();
    });

    test('should export Portal API schemas', () => {
      expect(wazoTypes.ConfdPortalSchema).toBeDefined();
      expect(wazoTypes.AuthPortalSchema).toBeDefined();
      expect(wazoTypes.DeploydPortalSchema).toBeDefined();
      expect(wazoTypes.AccessdPortalSchema).toBeDefined();
    });
});
