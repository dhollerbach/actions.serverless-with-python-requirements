import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { TagInstanceProfileRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface TagInstanceProfileCommandInput
  extends TagInstanceProfileRequest {}
export interface TagInstanceProfileCommandOutput extends __MetadataBearer {}
declare const TagInstanceProfileCommand_base: {
  new (
    input: TagInstanceProfileCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    TagInstanceProfileCommandInput,
    TagInstanceProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: TagInstanceProfileCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    TagInstanceProfileCommandInput,
    TagInstanceProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class TagInstanceProfileCommand extends TagInstanceProfileCommand_base {
  protected static __types: {
    api: {
      input: TagInstanceProfileRequest;
      output: {};
    };
    sdk: {
      input: TagInstanceProfileCommandInput;
      output: TagInstanceProfileCommandOutput;
    };
  };
}
