import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { UntagInstanceProfileRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UntagInstanceProfileCommandInput
  extends UntagInstanceProfileRequest {}
export interface UntagInstanceProfileCommandOutput extends __MetadataBearer {}
declare const UntagInstanceProfileCommand_base: {
  new (
    input: UntagInstanceProfileCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UntagInstanceProfileCommandInput,
    UntagInstanceProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UntagInstanceProfileCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UntagInstanceProfileCommandInput,
    UntagInstanceProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UntagInstanceProfileCommand extends UntagInstanceProfileCommand_base {
  protected static __types: {
    api: {
      input: UntagInstanceProfileRequest;
      output: {};
    };
    sdk: {
      input: UntagInstanceProfileCommandInput;
      output: UntagInstanceProfileCommandOutput;
    };
  };
}
