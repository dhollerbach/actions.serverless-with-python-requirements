import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { TagUserRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface TagUserCommandInput extends TagUserRequest {}
export interface TagUserCommandOutput extends __MetadataBearer {}
declare const TagUserCommand_base: {
  new (input: TagUserCommandInput): import("@smithy/smithy-client").CommandImpl<
    TagUserCommandInput,
    TagUserCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (__0_0: TagUserCommandInput): import("@smithy/smithy-client").CommandImpl<
    TagUserCommandInput,
    TagUserCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class TagUserCommand extends TagUserCommand_base {
  protected static __types: {
    api: {
      input: TagUserRequest;
      output: {};
    };
    sdk: {
      input: TagUserCommandInput;
      output: TagUserCommandOutput;
    };
  };
}
