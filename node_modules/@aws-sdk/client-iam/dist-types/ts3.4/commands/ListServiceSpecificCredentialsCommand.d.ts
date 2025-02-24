import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListServiceSpecificCredentialsRequest,
  ListServiceSpecificCredentialsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListServiceSpecificCredentialsCommandInput
  extends ListServiceSpecificCredentialsRequest {}
export interface ListServiceSpecificCredentialsCommandOutput
  extends ListServiceSpecificCredentialsResponse,
    __MetadataBearer {}
declare const ListServiceSpecificCredentialsCommand_base: {
  new (
    input: ListServiceSpecificCredentialsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListServiceSpecificCredentialsCommandInput,
    ListServiceSpecificCredentialsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListServiceSpecificCredentialsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListServiceSpecificCredentialsCommandInput,
    ListServiceSpecificCredentialsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListServiceSpecificCredentialsCommand extends ListServiceSpecificCredentialsCommand_base {
  protected static __types: {
    api: {
      input: ListServiceSpecificCredentialsRequest;
      output: ListServiceSpecificCredentialsResponse;
    };
    sdk: {
      input: ListServiceSpecificCredentialsCommandInput;
      output: ListServiceSpecificCredentialsCommandOutput;
    };
  };
}
