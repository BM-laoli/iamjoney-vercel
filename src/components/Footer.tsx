import Card from "./Card";

export default function Footer() {
  return (
    <Card className="mt-12 text-center mt-20" noStyle={true}>
      <p className="pixel-text text-sm text-gray-600">© 2025 Joney. All rights reserved.</p>
      <p className="pixel-text text-sm mt-2">
        <a href="https://iamjoney.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          iamjoney.com
        </a>
      </p>
    </Card>
  );
}