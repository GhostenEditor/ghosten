import { IMetadata } from '../types';

export class Metadata {
  /**
   * @Description: Ghost的版本
   */
  readonly version = '3.0.0';
  id: string | null = null;
  name: string | null = null;
  description: string | null = null;
  status: string | null = null;

  setProperty(property: keyof IMetadata, value: string | null) {
    this[property] = value;
  }

  setProperties(properties: Partial<IMetadata>) {
    for (const property in properties) {
      // @ts-ignore
      this[property] = properties[property];
    }
  }

  clear() {
    this.id = null;
    this.name = null;
    this.description = null;
    this.status = null;
  }

  export(): IMetadata & { version: string } {
    return {
      version: this.version,
      id: this.id,
      name: this.name,
      description: this.description,
      status: this.status,
    };
  }
}
