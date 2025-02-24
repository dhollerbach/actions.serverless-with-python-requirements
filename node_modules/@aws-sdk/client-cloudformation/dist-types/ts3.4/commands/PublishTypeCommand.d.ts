import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import { PublishTypeInput, PublishTypeOutput } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface PublishTypeCommandInput extends PublishTypeInput {}
export interface PublishTypeCommandOutput
  extends PublishTypeOutput,
    __MetadataBearer {}
declare const PublishTypeCommand_base: {
  new (
    input: PublishTypeCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PublishTypeCommandInput,
    PublishTypeCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [PublishTypeCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    PublishTypeCommandInput,
    PublishTypeCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PublishTypeCommand extends PublishTypeCommand_base {
  protected static __types: {
    api: {
      input: PublishTypeInput;
      output: PublishTypeOutput;
    };
    sdk: {
      input: PublishTypeCommandInput;
      output: PublishTypeCommandOutput;
    };
  };
}
