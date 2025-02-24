import { Paginator } from "@smithy/types";
import {
  ListServerCertificatesCommandInput,
  ListServerCertificatesCommandOutput,
} from "../commands/ListServerCertificatesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare const paginateListServerCertificates: (
  config: IAMPaginationConfiguration,
  input: ListServerCertificatesCommandInput,
  ...rest: any[]
) => Paginator<ListServerCertificatesCommandOutput>;
