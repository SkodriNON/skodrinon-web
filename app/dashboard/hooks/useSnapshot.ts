"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getSnapshotProposals,
} from "../services/snapshot.service";

export function useSnapshot() {

  const [
    proposals,
    setProposals,
  ] = useState<any[]>([]);

  useEffect(() => {

    async function load() {

      const data =
        await getSnapshotProposals();

      setProposals(data);
    }

    load();

  }, []);

  return {
    proposals,
  };
}