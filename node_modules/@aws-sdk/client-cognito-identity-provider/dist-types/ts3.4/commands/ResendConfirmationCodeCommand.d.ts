import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import {
  ResendConfirmationCodeRequest,
  ResendConfirmationCodeResponse,
} from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface ResendConfirmationCodeCommandInput
  extends ResendConfirmationCodeRequest {}
export interface ResendConfirmationCodeCommandOutput
  extends ResendConfirmationCodeResponse,
    __MetadataBearer {}
declare const ResendConfirmationCodeCommand_base: {
  new (
    input: ResendConfirmationCodeCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ResendConfirmationCodeCommandInput,
    ResendConfirmationCodeCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ResendConfirmationCodeCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ResendConfirmationCodeCommandInput,
    ResendConfirmationCodeCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ResendConfirmationCodeCommand extends ResendConfirmationCodeCommand_base {
  protected static __types: {
    api: {
      input: ResendConfirmationCodeRequest;
      output: ResendConfirmationCodeResponse;
    };
    sdk: {
      input: ResendConfirmationCodeCommandInput;
      output: ResendConfirmationCodeCommandOutput;
    };
  };
}
