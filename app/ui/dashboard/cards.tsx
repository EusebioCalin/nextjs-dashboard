import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import {
  fetchTotalPaidInvoicesValue,
  fetchTotalPendingInvoicesValue,
  fetchTotalCustomers,
} from "@/app/lib/data";

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const data = await Promise.all([
    fetchTotalPaidInvoicesValue(),
    fetchTotalPendingInvoicesValue(),
    fetchTotalCustomers(),
  ]);

  const [totalPaidInvoices, totalPendingInvoices, numberOfCustomers] = data;
  const numberOfInvoices = totalPaidInvoices + totalPendingInvoices;

  const totalPaidInvoicesFormatted = totalPaidInvoices.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const totalPendingInvoicesFormatted = totalPendingInvoices.toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    },
  );

  return (
    <>
      {/* NOTE: Uncomment this code in Chapter 9 */}
      <Card title="Collected" value={totalPaidInvoicesFormatted} type="collected" />
      <Card title="Pending" value={totalPendingInvoicesFormatted} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "invoices" | "customers" | "pending" | "collected";
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
