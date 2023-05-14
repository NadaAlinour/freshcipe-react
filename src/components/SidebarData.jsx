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
        title: 'Delivery Addresses',
        path: '/deliveryAddresses',
        icon: <IconScooter />,
        className: 'nav-text'
    },
    {
        title: 'Payment Details',
        path: '/paymentDetails',
        icon: <IconWallet />,
        className: 'nav-text'
    },
    {
        title: 'My Orders',
        path: '/myOrders',
        icon: <IconChecklist />,
        className: 'nav-text'
    },
    {
        title: 'Subscriptions',
        path: '/subscriptions',
        icon: <IconArrowBearRight />,
        className: 'nav-text'
    },
    {
        title: 'Reviews',
        path: '/reviews',
        icon: <IconSticker />,
        className: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <IconSettings />,
        className: 'nav-text'
    },
    {
        title: 'Log Out',
        path: '/login',
        icon: <IconDoorExit />,
        className: 'nav-text'
    },
]