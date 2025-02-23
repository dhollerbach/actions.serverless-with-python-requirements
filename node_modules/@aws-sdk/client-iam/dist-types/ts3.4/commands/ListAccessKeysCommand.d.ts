import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListAccessKeysRequest,
  ListAccessKeysResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListAccessKeysCommandInput extends ListAccessKeysRequest {}
export interface ListAccessKeysCommandOutput
  extends ListAccessKeysResponse,
    __MetadataBearer {}
declare const ListAccessKeysCommand_base: {
  new (
    input: ListAccessKeysCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListAccessKeysCommandInput,
    ListAccessKeysCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListAccessKeysCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListAccessKeysCommandInput,
    ListAccessKeysCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListAccessKeysCommand extends ListAccessKeysCommand_base {
  protected static __types: {
    api: {
      input: ListAccessKeysRequest;
      output: ListAccessKeysResponse;
    };
    sdk: {
      input: ListAccessKeysCommandInput;
      output: ListAccessKeysCommandOutput;
    };
  };
}
