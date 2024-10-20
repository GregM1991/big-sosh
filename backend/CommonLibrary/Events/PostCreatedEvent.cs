namespace CommonLibrary.Events
{
    public class PostCreatedEvent : BaseEvent
    {
        public string PostId { get; set; } = string.Empty;
        public string UserId { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
    }
}
