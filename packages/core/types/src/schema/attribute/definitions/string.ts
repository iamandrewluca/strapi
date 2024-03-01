import type { Intersect } from '../../../utils';
import type { Attribute } from '../../../schema';

export interface StringProperties {
  regex?: RegExp;
}

type StringAttribute = Intersect<
  [
    Attribute.OfType<'string'>,
    // Properties
    StringProperties,
    // Options
    Attribute.ConfigurableOption,
    Attribute.DefaultOption<StringValue>,
    Attribute.MinMaxLengthOption,
    Attribute.PrivateOption,
    Attribute.UniqueOption,
    Attribute.RequiredOption,
    Attribute.WritableOption,
    Attribute.VisibleOption
  ]
>;

export type StringValue = string;

export type GetStringValue<T extends Attribute.Attribute> = T extends StringAttribute
  ? StringValue
  : never;

export type String = StringAttribute;
