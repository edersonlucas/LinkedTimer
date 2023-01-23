import { Tabs } from "@mantine/core";
import { IconBroadcast, IconLink, IconPlugConnected } from "@tabler/icons-react";
import { LinksList } from "./LinksList";
import { InviteInput } from "./InviteInput";
import { JoinInput } from "./JoinInput";
import { useEffect, useState } from "react";
import { usePubSub } from "create-pubsub/react";
import { roomPeersPubSub } from "../constants/room";

export function ActionTabs() {
  const [activeTab, setActiveTab] = useState<string | null>(LinksList.name);
  const [roomPeers] = usePubSub(roomPeersPubSub);

  useEffect(() => setActiveTab(LinksList.name), [roomPeers]);

  return (
    <Tabs value={activeTab} onTabChange={setActiveTab}>
      <Tabs.List grow>
        <Tabs.Tab value={LinksList.name} icon={<IconLink size={14} />}>
          Links
        </Tabs.Tab>
        <Tabs.Tab value={InviteInput.name} icon={<IconBroadcast size={14} />}>
          Invite
        </Tabs.Tab>
        <Tabs.Tab value={JoinInput.name} icon={<IconPlugConnected size={14} />}>
          Join
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value={LinksList.name} p="md" pb="xs">
        <LinksList />
      </Tabs.Panel>
      <Tabs.Panel value={InviteInput.name} p="md">
        <InviteInput />
      </Tabs.Panel>
      <Tabs.Panel value={JoinInput.name} p="md">
        <JoinInput />
      </Tabs.Panel>
    </Tabs>
  );
}
