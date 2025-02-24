import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListServerCertificateTagsRequest,
  ListServerCertificateTagsResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListServerCertificateTagsCommandInput
  extends ListServerCertificateTagsRequest {}
export interface ListServerCertificateTagsCommandOutput
  extends ListServerCertificateTagsResponse,
    __MetadataBearer {}
declare const ListServerCertificateTagsCommand_base: {
  new (
    input: ListServerCertificateTagsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListServerCertificateTagsCommandInput,
    ListServerCertificateTagsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListServerCertificateTagsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListServerCertificateTagsCommandInput,
    ListServerCertificateTagsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListServerCertificateTagsCommand extends ListServerCertificateTagsCommand_base {
  protected static __types: {
    api: {
      input: ListServerCertificateTagsRequest;
      output: ListServerCertificateTagsResponse;
    };
    sdk: {
      input: ListServerCertificateTagsCommandInput;
      output: ListServerCertificateTagsCommandOutput;
    };
  };
}
