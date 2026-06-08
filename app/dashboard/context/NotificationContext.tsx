"use client";

import {

  createContext,

  useContext,

  useState,

  useCallback,

  useMemo,

} from "react";

// =====================================================
// TYPES
// =====================================================

export type NotificationType =

  | "success"
  | "error"
  | "info"
  | "warning";

type Notification = {

  id: number;

  message: string;

  type: NotificationType;

  txHash?: string;

  timestamp: number;
};

type NotificationContextType = {

  notifications:
    Notification[];

  addNotification: (

    message: string,

    type?: NotificationType,

    txHash?: string

  ) => void;

  removeNotification:
    (
      id: number
    ) => void;
};

// =====================================================
// CONTEXT
// =====================================================

const NotificationContext =
  createContext<
    NotificationContextType
  >({

    notifications: [],

    addNotification:
      () => {},

    removeNotification:
      () => {},
  });

// =====================================================
// PROVIDER
// =====================================================

export function NotificationProvider({

  children,

}: {

  children: React.ReactNode;
}) {

  const [

    notifications,

    setNotifications,

  ] = useState<
    Notification[]
  >([]);

  // =====================================================
  // REMOVE
  // =====================================================

  const removeNotification =
    useCallback(

      (
        id: number
      ) => {

        setNotifications(
          (prev) =>

            prev.filter(
              (
                notification
              ) =>

                notification.id !==
                id
            )
        );
      },

      []
    );

  // =====================================================
  // ADD
  // =====================================================

  const addNotification =
    useCallback(

      (

        message: string,

        type:
          NotificationType =
            "info",

        txHash?: string

      ) => {

        const id =
          Date.now() +
          Math.random();

        const notification = {

          id,

          message,

          type,

          txHash,

          timestamp:
            Date.now(),
        };

        setNotifications(
          (prev) => [

            ...prev,

            notification,
          ]
        );

        // AUTO REMOVE

        setTimeout(() => {

          removeNotification(
            id
          );

        }, 5000);
      },

      [
        removeNotification,
      ]
    );

  // =====================================================
  // MEMOIZED
  // =====================================================

  const value =
    useMemo(
      () => ({

        notifications,

        addNotification,

        removeNotification,

      }),

      [

        notifications,

        addNotification,

        removeNotification,
      ]
    );

  // =====================================================
  // RENDER
  // =====================================================

  return (

    <NotificationContext.Provider
      value={value}
    >

      {children}

      {/* TOAST STACK */}

      <div className="fixed top-5 right-5 z-[9999] flex flex-col gap-4 w-[340px] max-w-[90vw]">

        {notifications.map(
          (
            notification
          ) => {

            const styles = {

              success:
                "border-green-500/20 bg-green-500/10 text-green-300",

              error:
                "border-red-500/20 bg-red-500/10 text-red-300",

              warning:
                "border-yellow-500/20 bg-yellow-500/10 text-yellow-300",

              info:
                "border-cyan-500/20 bg-cyan-500/10 text-cyan-300",
            };

            const icons = {

              success:
                "✅",

              error:
                "❌",

              warning:
                "⚠️",

              info:
                "ℹ️",
            };

            return (

              <div

                key={
                  notification.id
                }

                className={`rounded-2xl border backdrop-blur-2xl px-5 py-4 shadow-2xl transition-all duration-300 animate-[fadeIn_.3s_ease] ${styles[notification.type]}`}

              >

                {/* HEADER */}

                <div className="flex items-start gap-4">

                  <div className="text-2xl">

                    {
                      icons[
                        notification.type
                      ]
                    }

                  </div>

                  <div className="flex-1">

                    <p className="font-semibold leading-6">

                      {
                        notification.message
                      }

                    </p>

                    {/* HASH */}

                    {

                      notification.txHash && (

                        <p className="text-xs opacity-70 mt-2 break-all">

                          {
                            notification.txHash
                          }

                        </p>

                      )

                    }

                    {/* TIME */}

                    <p className="text-[10px] opacity-50 mt-3">

                      {

                        new Date(

                          notification.timestamp

                        ).toLocaleTimeString()

                      }

                    </p>

                  </div>

                  {/* CLOSE */}

                  <button

                    onClick={() =>

                      removeNotification(
                        notification.id
                      )
                    }

                    className="text-sm opacity-60 hover:opacity-100 transition"

                  >

                    ✕

                  </button>

                </div>

              </div>
            );
          }
        )}

      </div>

    </NotificationContext.Provider>
  );
}

// =====================================================
// HOOK
// =====================================================

export function useNotifications() {

  return useContext(
    NotificationContext
  );
}