import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EventBridgeClient";
import { ListArchivesRequest, ListArchivesResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListArchivesCommandInput extends ListArchivesRequest {}
export interface ListArchivesCommandOutput
  extends ListArchivesResponse,
    __MetadataBearer {}
declare const ListArchivesCommand_base: {
  new (
    input: ListArchivesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListArchivesCommandInput,
    ListArchivesCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListArchivesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListArchivesCommandInput,
    ListArchivesCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListArchivesCommand extends ListArchivesCommand_base {
  protected static __types: {
    api: {
      input: ListArchivesRequest;
      output: ListArchivesResponse;
    };
    sdk: {
      input: ListArchivesCommandInput;
      output: ListArchivesCommandOutput;
    };
  };
}
