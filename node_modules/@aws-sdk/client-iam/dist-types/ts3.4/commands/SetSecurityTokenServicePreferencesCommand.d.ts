import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { SetSecurityTokenServicePreferencesRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface SetSecurityTokenServicePreferencesCommandInput
  extends SetSecurityTokenServicePreferencesRequest {}
export interface SetSecurityTokenServicePreferencesCommandOutput
  extends __MetadataBearer {}
declare const SetSecurityTokenServicePreferencesCommand_base: {
  new (
    input: SetSecurityTokenServicePreferencesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    SetSecurityTokenServicePreferencesCommandInput,
    SetSecurityTokenServicePreferencesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: SetSecurityTokenServicePreferencesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    SetSecurityTokenServicePreferencesCommandInput,
    SetSecurityTokenServicePreferencesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class SetSecurityTokenServicePreferencesCommand extends SetSecurityTokenServicePreferencesCommand_base {
  protected static __types: {
    api: {
      input: SetSecurityTokenServicePreferencesRequest;
      output: {};
    };
    sdk: {
      input: SetSecurityTokenServicePreferencesCommandInput;
      output: SetSecurityTokenServicePreferencesCommandOutput;
    };
  };
}
