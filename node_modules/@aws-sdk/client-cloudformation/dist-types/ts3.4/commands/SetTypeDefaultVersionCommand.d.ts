import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import {
  SetTypeDefaultVersionInput,
  SetTypeDefaultVersionOutput,
} from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface SetTypeDefaultVersionCommandInput
  extends SetTypeDefaultVersionInput {}
export interface SetTypeDefaultVersionCommandOutput
  extends SetTypeDefaultVersionOutput,
    __MetadataBearer {}
declare const SetTypeDefaultVersionCommand_base: {
  new (
    input: SetTypeDefaultVersionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    SetTypeDefaultVersionCommandInput,
    SetTypeDefaultVersionCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [SetTypeDefaultVersionCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    SetTypeDefaultVersionCommandInput,
    SetTypeDefaultVersionCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class SetTypeDefaultVersionCommand extends SetTypeDefaultVersionCommand_base {
  protected static __types: {
    api: {
      input: SetTypeDefaultVersionInput;
      output: {};
    };
    sdk: {
      input: SetTypeDefaultVersionCommandInput;
      output: SetTypeDefaultVersionCommandOutput;
    };
  };
}
