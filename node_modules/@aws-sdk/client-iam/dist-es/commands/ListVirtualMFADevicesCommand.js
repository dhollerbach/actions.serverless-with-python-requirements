import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListVirtualMFADevicesResponseFilterSensitiveLog, } from "../models/models_0";
import { de_ListVirtualMFADevicesCommand, se_ListVirtualMFADevicesCommand } from "../protocols/Aws_query";
export { $Command };
export class ListVirtualMFADevicesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "ListVirtualMFADevices", {})
    .n("IAMClient", "ListVirtualMFADevicesCommand")
    .f(void 0, ListVirtualMFADevicesResponseFilterSensitiveLog)
    .ser(se_ListVirtualMFADevicesCommand)
    .de(de_ListVirtualMFADevicesCommand)
    .build() {
}
