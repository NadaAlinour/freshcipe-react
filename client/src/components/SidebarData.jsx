import React from "react";
import { IconMenu2 } from '@tabler/icons-react';
import { IconX } from '@tabler/icons-react';
import { IconListDetails } from '@tabler/icons-react';
import { IconScooter } from '@tabler/icons-react';
import { IconWallet } from '@tabler/icons-react';
import { IconChecklist } from '@tabler/icons-react';
import { IconArrowBearRight } from '@tabler/icons-react';
import { IconSticker } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import { IconDoorExit } from '@tabler/icons-react';

export const SidebarData = [
    {
        title: 'Personal Details',
        path: '/personalDetails',
        icon: <IconListDetails />,
        className: 'nav-text'
    },
    {
        title: 'Payment Details',
        path: '/paymentDetails',
        icon: <IconWallet />,
        className: 'nav-text'
    },
]