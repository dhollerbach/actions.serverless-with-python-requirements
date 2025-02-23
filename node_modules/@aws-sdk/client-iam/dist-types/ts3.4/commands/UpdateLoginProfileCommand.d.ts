import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { UpdateLoginProfileRequest } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface UpdateLoginProfileCommandInput
  extends UpdateLoginProfileRequest {}
export interface UpdateLoginProfileCommandOutput extends __MetadataBearer {}
declare const UpdateLoginProfileCommand_base: {
  new (
    input: UpdateLoginProfileCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateLoginProfileCommandInput,
    UpdateLoginProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: UpdateLoginProfileCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateLoginProfileCommandInput,
    UpdateLoginProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateLoginProfileCommand extends UpdateLoginProfileCommand_base {
  protected static __types: {
    api: {
      input: UpdateLoginProfileRequest;
      output: {};
    };
    sdk: {
      input: UpdateLoginProfileCommandInput;
      output: UpdateLoginProfileCommandOutput;
    };
  };
}
