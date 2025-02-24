import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { DeleteLoginProfileRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteLoginProfileCommandInput
  extends DeleteLoginProfileRequest {}
export interface DeleteLoginProfileCommandOutput extends __MetadataBearer {}
declare const DeleteLoginProfileCommand_base: {
  new (
    input: DeleteLoginProfileCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteLoginProfileCommandInput,
    DeleteLoginProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DeleteLoginProfileCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteLoginProfileCommandInput,
    DeleteLoginProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteLoginProfileCommand extends DeleteLoginProfileCommand_base {
  protected static __types: {
    api: {
      input: DeleteLoginProfileRequest;
      output: {};
    };
    sdk: {
      input: DeleteLoginProfileCommandInput;
      output: DeleteLoginProfileCommandOutput;
    };
  };
}
