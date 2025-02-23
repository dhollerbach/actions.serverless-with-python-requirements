import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { UntagUserRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UntagUserCommandInput extends UntagUserRequest {}
export interface UntagUserCommandOutput extends __MetadataBearer {}
declare const UntagUserCommand_base: {
  new (
    input: UntagUserCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UntagUserCommandInput,
    UntagUserCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UntagUserCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UntagUserCommandInput,
    UntagUserCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UntagUserCommand extends UntagUserCommand_base {
  protected static __types: {
    api: {
      input: UntagUserRequest;
      output: {};
    };
    sdk: {
      input: UntagUserCommandInput;
      output: UntagUserCommandOutput;
    };
  };
}
