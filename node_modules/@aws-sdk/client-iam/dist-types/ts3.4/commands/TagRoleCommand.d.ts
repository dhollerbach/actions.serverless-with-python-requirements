import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { TagRoleRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface TagRoleCommandInput extends TagRoleRequest {}
export interface TagRoleCommandOutput extends __MetadataBearer {}
declare const TagRoleCommand_base: {
  new (input: TagRoleCommandInput): import("@smithy/smithy-client").CommandImpl<
    TagRoleCommandInput,
    TagRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (__0_0: TagRoleCommandInput): import("@smithy/smithy-client").CommandImpl<
    TagRoleCommandInput,
    TagRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class TagRoleCommand extends TagRoleCommand_base {
  protected static __types: {
    api: {
      input: TagRoleRequest;
      output: {};
    };
    sdk: {
      input: TagRoleCommandInput;
      output: TagRoleCommandOutput;
    };
  };
}
