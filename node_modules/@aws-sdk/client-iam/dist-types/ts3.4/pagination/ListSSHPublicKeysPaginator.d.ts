import { Paginator } from "@smithy/types";
import {
  ListSSHPublicKeysCommandInput,
  ListSSHPublicKeysCommandOutput,
} from "../commands/ListSSHPublicKeysCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare const paginateListSSHPublicKeys: (
  config: IAMPaginationConfiguration,
  input: ListSSHPublicKeysCommandInput,
  ...rest: any[]
) => Paginator<ListSSHPublicKeysCommandOutput>;
