import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import {
  RegisterPublisherInput,
  RegisterPublisherOutput,
} from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface RegisterPublisherCommandInput extends RegisterPublisherInput {}
export interface RegisterPublisherCommandOutput
  extends RegisterPublisherOutput,
    __MetadataBearer {}
declare const RegisterPublisherCommand_base: {
  new (
    input: RegisterPublisherCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RegisterPublisherCommandInput,
    RegisterPublisherCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [RegisterPublisherCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    RegisterPublisherCommandInput,
    RegisterPublisherCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class RegisterPublisherCommand extends RegisterPublisherCommand_base {
  protected static __types: {
    api: {
      input: RegisterPublisherInput;
      output: RegisterPublisherOutput;
    };
    sdk: {
      input: RegisterPublisherCommandInput;
      output: RegisterPublisherCommandOutput;
    };
  };
}
