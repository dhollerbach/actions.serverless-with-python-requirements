import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVirtualMFADeviceResponseFilterSensitiveLog, } from "../models/models_0";
import { de_CreateVirtualMFADeviceCommand, se_CreateVirtualMFADeviceCommand } from "../protocols/Aws_query";
export { $Command };
export class CreateVirtualMFADeviceCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "CreateVirtualMFADevice", {})
    .n("IAMClient", "CreateVirtualMFADeviceCommand")
    .f(void 0, CreateVirtualMFADeviceResponseFilterSensitiveLog)
    .ser(se_CreateVirtualMFADeviceCommand)
    .de(de_CreateVirtualMFADeviceCommand)
    .build() {
}
