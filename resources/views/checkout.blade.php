<form action="{{ route('checkout.process') }}" method="POST">
    @csrf
    <input type="hidden" name="cart_id" value="{{ $cart->id }}">
    <input type="hidden" name="amount" value="{{ $cart->total }}">
    <input type="text" name="name" placeholder="Name" required>
    <input type="email" name="email" placeholder="Email" required>
    <input type="text" name="phone" placeholder="Phone" required>
    <!-- Additional customer details -->
    <button type="submit">Checkout</button>
</form>
