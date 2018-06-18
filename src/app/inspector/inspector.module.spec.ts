import { InspectorModule } from './inspector.module';

describe('InspectorModule', () => {
  let inspectorModule: InspectorModule;

  beforeEach(() => {
    inspectorModule = new InspectorModule();
  });

  it('should create an instance', () => {
    expect(inspectorModule).toBeTruthy();
  });
});
