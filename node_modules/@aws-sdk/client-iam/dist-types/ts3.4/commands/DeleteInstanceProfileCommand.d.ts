import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeleteInstanceProfileRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteInstanceProfileCommandInput
  extends DeleteInstanceProfileRequest {}
export interface DeleteInstanceProfileCommandOutput extends __MetadataBearer {}
declare const DeleteInstanceProfileCommand_base: {
  new (
    input: DeleteInstanceProfileCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteInstanceProfileCommandInput,
    DeleteInstanceProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: DeleteInstanceProfileCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteInstanceProfileCommandInput,
    DeleteInstanceProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteInstanceProfileCommand extends DeleteInstanceProfileCommand_base {
  protected static __types: {
    api: {
      input: DeleteInstanceProfileRequest;
      output: {};
    };
    sdk: {
      input: DeleteInstanceProfileCommandInput;
      output: DeleteInstanceProfileCommandOutput;
    };
  };
}
